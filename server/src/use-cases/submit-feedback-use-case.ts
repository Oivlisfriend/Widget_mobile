import { MailAdapter } from "../adpaters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedbacks-respository";

interface SubmitFeedBackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbackRepository: FeedbackRepository,
        private mailAdapter: MailAdapter,
    ) { }
    async execute(request: SubmitFeedBackUseCaseRequest) {
        const { type, comment, screenshot } = request;
        if (!type) {
            throw new Error('Type required');
        }
        if (!comment) {
            throw new Error('Type required');
        }
        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        })
        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color:#111;">`,
                `<p>Tipo do feedback:${type}</p>`,
                `<p>Comentário: ${comment}`,
                `</div>`
            ].join('\n')
        })
    }
}
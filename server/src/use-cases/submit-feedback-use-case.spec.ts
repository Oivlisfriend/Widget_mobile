import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";
const createFeedbackSpy = jest.fn();
const sendMailbackSpy = jest.fn();
const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailbackSpy }
)
describe('Submit feedback', () => {
    it('should be able to submit feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'test.jpg',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailbackSpy).toHaveBeenCalled();
    });
    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });

});
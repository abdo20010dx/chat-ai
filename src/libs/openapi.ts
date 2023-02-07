import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export async function chatApi(textQuery: string) {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: textQuery,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.6,
        presence_penalty: 0.6,


    });

    return completion.data.choices[0].text
}  
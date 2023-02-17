import openai from "./chatgpt";

const query = async( prompt: string, chatId: string, model: string ) => {

    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.7,
        top_p: 1,
        max_tokens: 256,
        frequency_penalty: 0,
        presence_penalty: 0
    })
    .then(res => res.data.choices[0].text )
    .catch((err) => `ChatGPT was unable to find an answer for that! (Error: ${err.message}`)

    return res?.trim()
}

export default query
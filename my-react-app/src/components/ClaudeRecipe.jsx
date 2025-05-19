import ReactMarkdown from "react-markdownn="


export default function ClaudeRecipe(props) {
    return (
        <section className="sugestested-recipe-container">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}
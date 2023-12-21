import clsx from "clsx";

export default function Item({ text, onDelete }){
    return (
        <article 
        className={clsx("border border-white/5 rounded", "flex justify-between items-center", "p-2", { "bg-red-500": text === "lavar" })}>
            <span>{text}</span>
            <span className="bg-purple-600/50 rounded p-2 cursor pointer hover:bg-purple-600/30" onClick={onDelete}>
                Done
            </span>
        </article>
    )
}
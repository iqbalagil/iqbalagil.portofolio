import * as stylex from "@stylexjs/stylex";

const btn = stylex.create({
    Widget : {
        backgroundColor : "#F9E897",
        borderStyle: 'none',
        borderRadius : 10,
        padding: 25,
        fontSize: 16,
        zIndex: 100
    }
})

export default function Button(){
    return (
        <div>
        <button {...stylex.props(btn.Widget)}>
            Contact
        </button>
        </div>
    )

}

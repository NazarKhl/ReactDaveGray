export default function Footer({ length }) {
    return (
        <>
            <div>
                <p>{length} {length === 1 ? "Item" : "Items"}</p>
            </div>
        </>
    );
}             
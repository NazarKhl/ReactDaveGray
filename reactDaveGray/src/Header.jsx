export default function Header({titles}){
    return (
        <>
            <div>
                <h1>{titles}</h1>
            </div>
        </>
    );
}
Header.defaultProps = {
    titles: "Default Title"
}
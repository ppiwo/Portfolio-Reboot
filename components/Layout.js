import Navigation from './Navigation';

export default function Layout({children}) {
    console.log(children)
    return (
        <div className="container">
            <nav></nav>
            <main>{children}</main>
        </div>
    )
}

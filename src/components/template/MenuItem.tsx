import Link from "next/link"

interface MenuItemProps {
    texto: string
    icone: any
    url?: string
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarLink() {
        return (
            <div className={`
                flex flex-col justify-center items-center
                h-20 w-20 
                dark:text-gray-200 
                ${props.className}
            `}>
            {props.icone}
            <span className={`text-xs font-light`}>
                {props.texto}
            </span>
        </div>
        )
    }
    return (
        <li onClick={props.onClick} className={`
        hover:bg-gray-300 dark:hover:bg-gray-700
        cursor-pointer
        `}>
            {props.url ? (
            <Link href={props.url}>
                {renderizarLink()}
            </Link>
            ) : (
                renderizarLink()
            )}
        </li>
    )
}
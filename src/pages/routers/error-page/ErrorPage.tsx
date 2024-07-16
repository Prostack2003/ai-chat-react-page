import { useRouteError } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage() {
    const error = useRouteError() as { statusText?: string; message?: string };;
    console.error(error);

    return (
        <div id="error-page">
            <h1>Ой!</h1>
            <p>Извините, но возникла ошибка!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

import Router from "next/router";

export default function ErrorPage() {

    return (
        <div className={`text-center py-5`}>
            <p><b>Упс... Что-то пошло не так</b></p>
            <p><b>Страница не найдена</b></p>
            <div>
                <span className={`btn btn-outline-info mr-2`}
                onClick={Router.back}>
                    <b>Вернуться на предыдущую</b>
                </span>
                <span className={`btn btn-outline-primary`}
                      onClick={() => Router.push(`/`)}>
                    <b>На главную</b>
                </span>
            </div>
        </div>
    )
}
import { html } from "@popeindustries/lit-html-server";
import { HTMLTemplateData } from "./html";

/**
 * Takes given html template data and puts it in a common layout with a header and footer
 */
export function basicLayout(htmlTemplateData: HTMLTemplateData): HTMLTemplateData {
    const newHeaders = html`
        <link rel="stylesheet" href="/static/app.css">
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png">
        ${htmlTemplateData.head}`

    const bodyInLayout = html`
        <header>
            <h1>Weather Watcher 🌦</h1>
        </header>
<!--         <nav>
        <ul>
            <li><a href="/">Home</a></li>
        </ul>
        </nav> -->
        ${htmlTemplateData.body}
        <footer>
            <p>
            This product contains AQI data available from <a href="https://waqi.info/fr/">WAQI</a>
            </p>
        </footer>`

    return {...htmlTemplateData,
        head: newHeaders,
        body: bodyInLayout,
    }
}

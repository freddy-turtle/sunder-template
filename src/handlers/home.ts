import { Context } from "sunder";
import { html, renderToString } from "@popeindustries/lit-html-server";

import { htmlDocumentTemplate, HTMLTemplateData } from "../templates/html";
import { basicLayout } from "../templates/layout";
import { geolocation } from "../components/geolocation";
import { airQualityIndex } from "../components/airQualityIndex";
import { aqiForecasts } from "../components/aqiForecasts";

export async function homeHandler(ctx: Context) {


    const pageData: HTMLTemplateData = {
        title: "Weather Watcher",
        body: html`
            <div class="auto-grid">
                ${geolocation(ctx)}
                ${airQualityIndex(ctx)}
                ${aqiForecasts(ctx)}
            </div>

        `,
    };
    const templateResult = htmlDocumentTemplate(basicLayout(pageData));
    ctx.response.body = await renderToString(templateResult);
}

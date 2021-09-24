import { Context } from "sunder";
import { html, TemplateResult  } from "@popeindustries/lit-html-server";
import { waqiContent } from "../queries/waqi";

export async function airQualityIndex(ctx: Context) : Promise<TemplateResult> {

    const content = await waqiContent(ctx)
    //console.log(JSON.stringify(content.data))


    const string = html`
        <div class="grid-item">
            <h2>Air Quality Index</h2>
            <br/>
            <ul>
                <li>Based off sensor data from <a href="${content.data.city.url}">${content.data.city.name}</a>:</li>
                <li>The AQI level is: ${content.data.aqi}.</li>
                <li>The N02 level is: ${content.data.iaqi.no2.v}.</li>
                <li>The O3 level is: ${content.data.iaqi.o3.v}.</li>
                <li>The temperature is: ${content.data.iaqi.t.v}°C.</li>

            </ul>
        </div>
    `;
    return string;
}

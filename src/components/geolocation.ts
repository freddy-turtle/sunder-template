import { Context } from "sunder";
import { html, TemplateResult  } from "@popeindustries/lit-html-server";

export async function geolocation(ctx: Context) : Promise<TemplateResult> {

    const flag = ctx.request.cf.country == "FR" ? "🇫🇷" : ctx.request.cf.country

    const string = html`
        <div class="grid-item">
            <h2>Geo-location</h2>
            <br/>
            <ul>
                <li>Country: ${flag} </li>
                <li>🌆 City: ${ctx.request.cf.city} </li>
                <li>🌍 Continent: ${ctx.request.cf.continent} </li>
                <li>📍 Latitude: ${ctx.request.cf.latitude}, Longitude: ${ctx.request.cf.longitude}  </li>
                <li>✉️ PostalCode: ${ctx.request.cf.postalCode} </li>
                <li>🚋 Region: ${ctx.request.cf.region} </li>
<!--                 <li>RegionCode: ${ctx.request.cf.regionCode} </li> -->
            </ul>
        </div>
    `;
    return string;
}

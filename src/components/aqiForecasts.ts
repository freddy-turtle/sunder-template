import { Context } from "sunder";
import { html, TemplateResult  } from "@popeindustries/lit-html-server";
import { waqiContent } from "../queries/waqi";

export async function aqiForecasts(ctx: Context) : Promise<TemplateResult> {

    const content = await waqiContent(ctx)
    //console.log(JSON.stringify(content.data))

    const o3 = content.data.forecast.daily.o3;
    const pm10 = content.data.forecast.daily.pm10;
    const pm25 = content.data.forecast.daily.pm25;
    const uvi = content.data.forecast.daily.uvi;

    const days = new Array(5).fill("")
    .map(( _v , i)=> {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return `${d.getDate()}-${d.getMonth() +1}-${d.getFullYear()}`
    })


    const string = html`
        <div class="grid-item">
            <h2>AQI Forecasts</h2>
            <br/>
            <table>
<!--                 <caption>
                    Small table
                </caption> -->

                <thead>
                    <tr>
                    <th>📅</th>
                    <td>o3</td>
                    <td>pm10</td>
                    <td>pm25</td>
                    <td>UVI</td>
                    </tr>
                </thead>


                <tbody>
                    ${ days.map((day, i) =>
                        html`
                        <tr>
                            <th>${day}</th>
                            <td>${o3[i].avg}</td>
                            <td>${pm10[i].avg}</td>
                            <td>${pm25[i].avg}</td>
                            <td>${uvi[i].avg}</td>
                        </tr>
                        `
                    )}

                    <!-- <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    `;
    return string;
}

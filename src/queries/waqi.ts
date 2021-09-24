import { Context } from "sunder";

let content : any = null

export async function waqiContent(ctx: Context) {
    if(content) return content;

    let endpoint = "https://api.waqi.info/feed/geo:"
    const token = "80fbffda139387df505c88dc4d4ac1756291d9c6" //Use a token from https://aqicn.org/api/


    let latitude = ctx.request.cf.latitude
    let longitude = ctx.request.cf.longitude
    endpoint+= `${latitude};${longitude}/?token=${token}`

    const init = {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    }

    const response = await fetch(endpoint,init)
    content = await response.json()
    //console.log(JSON.stringify(content.data))

    return content;
}

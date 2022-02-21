
import json from "../../components/imgs/MOOCK.json";
export const GET_SERVICES="GET_SERVICES";

export async function getServices(){
    return (
        {
            type: GET_SERVICES,
            payload: json
        }
    )
}

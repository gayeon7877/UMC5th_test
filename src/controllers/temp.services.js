import { tempResponseDTO } from "../../dtos/temp.reponse.dto.js"
export const getTempData = () => {
    return tempResponseDTO("This is TEST! >.0");
}

export function CheckFlag(flag){
    if(flag == 1)
        throw new Error("Flag is 1!!");   // 에러 발생시키기!
    else{
        return flagResponseDTO(flag);
    }
}
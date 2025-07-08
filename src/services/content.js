import { apiGetService } from "./helpers"

export const getStages=()=>{
    return apiGetService("/life-stages?populate=*&sort=ranking:asc")
}
export const getStageDetailsById=(type,id)=>{

    const data=type==="health-ecosystem-items"?"related_health_item":"related_technology"
   return apiGetService(`/detail-pages?filters[${data}][documentId][$eq]=${id}&populate[sections][populate][items][populate][key_points]=true&populate[main_image]=true`)
}
export const getStagesById=(id)=>{
    return apiGetService(`/life-stages/${id}?populate[frontier_technologies]=true&populate[health_ecosystem_items]=true&populate[featured_resources][populate]=*`)
}
export const getStageDetailsImage=(type,id)=>{
return apiGetService(`/${type}/${id}?populate[detail_page][populate]=*`)

}
export const getAboutDetails=()=>{
    return apiGetService(`/about-pages?populate[about_sections][populate]=*`)
}
import {getCameras, getOneCamera} from './getCamera.mjs';

main()

async function main(){

    const url =new URL(window.location.href);
    const id = url.searchParams.get("id");
    

    const cameras = await getCameras();

    const camera = getOneCamera(cameras,id);


}

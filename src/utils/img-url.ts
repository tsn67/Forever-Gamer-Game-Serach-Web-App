
//after media/crop/width/height is added reduce image resource

const getCropedImageUrl = (url: string): string => {

    if (!url)
        return url //in some case it can be empty string

    const target = "media/";
    const index = url.indexOf(target) + target.length;

    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCropedImageUrl;

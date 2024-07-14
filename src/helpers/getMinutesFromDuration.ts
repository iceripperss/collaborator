const getMinutesFromDuration = (duration: string) => {
    const durationArray = duration.split(":");

    return parseInt(durationArray[0]) * 60 + parseInt(durationArray[1]);
};

export default getMinutesFromDuration;

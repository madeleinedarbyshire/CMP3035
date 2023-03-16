const formatNumeric = (x) => ('0' + x).slice(-2)

export function calculateTime(data){
    const startTime = data[0].timestamp
    const endTime = data[data.length - 1].timestamp

    const totalSeconds = Math.round((endTime - startTime) / 1000);

    const minutes = formatNumeric(Math.floor(totalSeconds / 60));
    const seconds = formatNumeric(totalSeconds % 60);

    return `${minutes}:${seconds}`;
}

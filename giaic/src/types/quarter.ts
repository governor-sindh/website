export interface IQuarterData {
    id: number,
    objective: string,
    duration_weeks: number, //weeks
    description: string[],
    outline: {
        title: string,
        children?: (
            {
                type: string,
                text: string,
                url?: string,
            }
            |
            {
                type: string
                children: {
                    type: string,
                    text: string,
                    url?: string,
                }[][]
            }
        )[][]
        ,
    }[]
}

export interface ITrackDataType {
    trackName: string,
    data: IQuarterData
}
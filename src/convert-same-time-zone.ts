import { ISOTimeT } from './models';
import moment from 'moment';

export const convertSameTimeZone = (sourceTime: ISOTimeT, targetTimzoneTime: ISOTimeT): ISOTimeT => {
    const targetTimeZoneOffset = moment.parseZone(targetTimzoneTime).utcOffset();

    const result = moment.parseZone(sourceTime);

    result.utcOffset(targetTimeZoneOffset);

    return result.format();
};

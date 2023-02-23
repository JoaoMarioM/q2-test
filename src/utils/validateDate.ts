const YupValidateDate = (date?: string) => {
    const dtArray = date?.split("/");
    if (!dtArray) return;
    if (dtArray === null) return false;
    if (dtArray[0]?.length < 2) return false;
    if (dtArray[1]?.length < 2) return false;
    if (dtArray[2]?.length < 4) return false;
    if (parseInt(dtArray[2]) < 1900) return false;
    const dtDay = dtArray[0];
    const dtMonth = dtArray[1];
    const dtYear = dtArray[2];
    if (Number(dtMonth) < 1 || Number(dtMonth) > 12) return false;
    else if (Number(dtDay) < 1 || Number(dtDay) > 31) return false;
    else if (
        (Number(dtMonth) === 4 ||
            Number(dtMonth) === 6 ||
            Number(dtMonth) === 9 ||
            Number(dtMonth) === 11) &&
        Number(dtDay) === 31
    )
        return false;
    else if (Number(dtMonth) === 2) {
        const isleap =
            Number(dtYear) % 4 === 0 &&
            (Number(dtYear) % 100 !== 0 || Number(dtYear) % 400 === 0);
        if (Number(dtDay) > 29 || (Number(dtDay) === 29 && !isleap))
            return false;
    }
    return true;
};

const ConvertFrontendDate = (frontendDate = "") => {
    if (!frontendDate || typeof frontendDate !== "string") return "";
    const [date, month, year] = frontendDate.split("/");
    return `${year}-${month}-${date}`;
};

export const YupValidateDateUntilToday = (date?: string) => {
    if (!YupValidateDate(date)) return false;
    const now = new Date().getTime();
    const _date = new Date(ConvertFrontendDate(date)).getTime();
    if (now - _date < 0) return false;
    return true;
};

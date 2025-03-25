export enum OffcanvasPosition {
    offcanvasStart = "offcanvas-start",
    offcanvasEnd = "offcanvas-end",
    offcanvasTop = "offcanvas-top",
    offcanvasBottom = "offcanvas-bottom"
}

export function getOffcanvasPosition(position: OffcanvasPosition): string {
    let tempPosition: string = "";
    if (position == null)
        return "";
    else {
        switch (position) {
            case OffcanvasPosition.offcanvasStart:
                tempPosition = OffcanvasPosition.offcanvasStart;
                break;
            case OffcanvasPosition.offcanvasEnd:
                tempPosition = OffcanvasPosition.offcanvasEnd;
                break;
            case OffcanvasPosition.offcanvasTop:
                tempPosition = OffcanvasPosition.offcanvasTop;
                break;
            case OffcanvasPosition.offcanvasBottom:
                tempPosition = OffcanvasPosition.offcanvasBottom;
                break;
        }
    }
    return tempPosition;
}

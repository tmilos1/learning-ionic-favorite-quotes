
export class SettingsService
{
    private alternativeColor: boolean = false;

    setAlternativeColor(altColor: boolean) {
        this.alternativeColor = altColor;
    }

    isAlternativeColor() : boolean {
        return this.alternativeColor;
    }
}
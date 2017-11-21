export class User {
    private _wordsLevel: number;
    private _scriptId: number;
    private _baseExperience: number;
    private _availableCategories: number[];

    /**
     * Default constructor
     */
    public constructor(){

    }

    public get wordsLevel(): number {
        return this._wordsLevel;
    }

    public set wordsLevel(wordsLevel: number) {
        this._wordsLevel = wordsLevel;
    }

    public get scriptId(): number {
        return this._scriptId;
    }

    public set scriptId(scriptId: number) {
        this._scriptId = scriptId;
    }

    public get baseExperience(): number {
        return this._baseExperience;
    }

    public set baseExperience(baseExperience: number) {
        this._baseExperience = baseExperience;
    }

    public get availableCategories(): number[] {
        return this._availableCategories;
    }

    public set availableCategories(availableCategories: number[]) {
        this._availableCategories = availableCategories;
    }

}

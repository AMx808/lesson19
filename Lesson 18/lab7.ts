

abstract class User {
    abstract getMyName(): string;
    abstract getMyAge(): number;
    abstract logInfo(): void;
}
class Doctor extends User{
    getMyName(): string {
        return "";
    }
    getMyAge(): number {
        return 0;
    }
    logInfo(): void {
    }
}
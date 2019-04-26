
export interface Observer {
    notify(data: any);

}
// used to implement global event bus
interface Subject {
    registerObserver(obs: Observer);
    unregisterObserver(obs: Observer);
    notifyObservers(data: any);
}

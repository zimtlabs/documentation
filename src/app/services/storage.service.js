import { Subject, BehaviorSubject } from 'rxjs';

import { isRootPath } from '../utils';

// Storage wrapper
export class StorageService {
    namespace = '';
    // localStorage, sessionStorage
    storage = localStorage;
    crumbSub = new Subject();
    sidebarSub = new BehaviorSubject(window.innerWidth >= 1280 && !isRootPath());
    sidebarOpenedPathSub = new BehaviorSubject({
        activePage: {
            pathname: '',
        },
        pages: [],
    });

    resetNav = () => {
        this.sidebarOpenedPathSub.next({
            activePage: {
                pathname: '',
            },
            pages: [],
        });
    }

    set(key, value) {
        this.storage.setItem(`${this.namespace}${key}`, JSON.stringify(value));
    }

    put(key, value) {
        if (!this.get(key)) {
            this.storage.setItem(`${this.namespace}${key}`, JSON.stringify(value));
        } else {
            return false;
        }
    }

    get(key) {
        try {
            return JSON.parse(this.storage.getItem(`${this.namespace}${key}`));
        } catch (err) {
            return this.storage.getItem(`${this.namespace}${key}`);
        }
    }

    getAll() {
        const items = Object.keys(this.storage).reduce((acc, key) => {
            if (key.indexOf(this.namespace) > -1) {
                acc.push({
                    key,
                    value: this.storage.getItem(key),
                });
            }

            return acc;
        }, []);

        return items;
    }

    delete(key) {
        this.storage.removeItem(`${this.namespace}${key}`);
    }

    clear() {
        const items = this.getAll();

        for (const item of items) {
            this.storage.removeItem(item.key);
        }
    }

    // Warning: this will delete other websites data as well on localhost only, as for actual domains, each domain has its own localStorage space, so namespaces isn't necessary
    clearEntireStorage() {
        this.storage.clear();
    }
}

export default new StorageService();

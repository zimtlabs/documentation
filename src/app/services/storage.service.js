import { Subject, BehaviorSubject } from 'rxjs';

import { is } from '../utils';

export class StorageService {
    storage;
    crumbSub = new Subject();
    currentOrganizationSub = new Subject();
    userTheme = new BehaviorSubject('light');
    sidebarSub = new BehaviorSubject();
    sidebarOpenedPathSub = new BehaviorSubject({
        activePage: {
            pathname: '',
        },
        pages: [],
    });

    get namespace() {
        return is('', 'localhost') ? 'ZIMT_DOCUMENTATION__' : 'ZIMT__';
    }

    resetNav = () => {
        this.sidebarOpenedPathSub.next({
            activePage: {
                pathname: '',
            },
            pages: [],
        });
    }

    setUserTheme(theme) {
        if (this.storage) {
            if (['light', 'dark', 'auto'].indexOf(theme) > -1) {
                this.set('userTheme', theme);
                this.userTheme.next(theme);
            }
        }
    }

    init(storage) {
        this.storage = storage;
    }

    // localStorage wrapper
    set(key, value) {
        if (this.storage) this.storage.setItem(`${this.namespace}${key}`, JSON.stringify(value));
    }

    put(key, value) {
        if (this.storage) {
            if (!this.get(key)) {
                this.storage.setItem(`${this.namespace}${key}`, JSON.stringify(value));
            } else return false;
        }
    }

    get(key) {
        if (this.storage) {
            try {
                return JSON.parse(this.storage.getItem(`${this.namespace}${key}`));
            } catch (err) {
                return this.storage.getItem(`${this.namespace}${key}`);
            }
        }
    }

    getAll() {
        if (this.storage) {
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
    }

    delete(key) {
        if (this.storage) this.storage.removeItem(`${this.namespace}${key}`);
    }

    clear() {
        if (this.storage) {
            const items = this.getAll();

            for (const item of items) this.storage.removeItem(item.key);
        }
    }

    // Warning: this will delete other websites data as well on localhost only, as for actual domains, each domain has its own localStorage space, so namespaces isn't necessary
    clearEntireStorage() {
        if (this.storage) this.storage.clear();
    }
}

export default new StorageService();

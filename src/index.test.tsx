import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import {useCookieWatcher} from "./index";

const COOKIE_NAME = "cookie-token"

const Demo = () => {
    const value = useCookieWatcher(COOKIE_NAME, {
        valueOnly: true
    });
    const exist = useCookieWatcher(COOKIE_NAME);
    return <div>
        <p>{exist ? "cookie-ok" : "cookie-missing"}</p>
        <p>{value}</p>
    </div>
}

describe("useCookieWatcher test", () => {

    beforeEach(() => {
        document.cookie = `${COOKIE_NAME}=;Max-Age=0`;
    });

    test("check if initial cookie is detected", () => {
        document.cookie = `${COOKIE_NAME}=value`;
        render(<Demo/>);
        expect(screen.getByText("cookie-ok")).toBeDefined()
        expect(screen.getByText("value")).toBeDefined()
    })

    test("check if missing cookie is detected", () => {
        render(<Demo/>);
        expect(screen.getByText("cookie-missing")).toBeDefined()
        expect(screen.queryByText("value")).toBeNull()
    })

    test("check if detection live is working", () => {
        render(<Demo/>);
        expect(screen.getByText("cookie-missing")).toBeDefined()
        setTimeout(() => document.cookie = `${COOKIE_NAME}=value`, 1000);
        setTimeout(() => {
            document.cookie = `${COOKIE_NAME}value`;
            expect(screen.getByText("cookie-ok")).toBeDefined()
            expect(screen.getByText("value")).toBeDefined()
        }, 300);
    })

})

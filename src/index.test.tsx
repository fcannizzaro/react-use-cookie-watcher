import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import {useCookieWatcher} from "./index";

const Demo = () => {
    const value = useCookieWatcher("token", {
        valueOnly: true
    });
    const exist = useCookieWatcher("token");
    return <div>
        <p>{exist ? "cookie-ok" : "cookie-missing"}</p>
        <p>{value}</p>
    </div>
}

describe("useCookieWatcher test", () => {

    beforeEach(() => {
        document.cookie = "token=;Max-Age=0";
    });

    test("check if initial cookie is detected", () => {
        document.cookie = "token=value";
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
        setTimeout(() => document.cookie = "token=value", 1000);
        setTimeout(() => {
            document.cookie = "token=value";
            expect(screen.getByText("cookie-ok")).toBeDefined()
            expect(screen.getByText("value")).toBeDefined()
        }, 300);
    })

})

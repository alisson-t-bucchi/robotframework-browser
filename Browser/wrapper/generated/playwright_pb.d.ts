// package: 
// file: playwright.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class screenshotRequest extends jspb.Message { 
    getPath(): string;
    setPath(value: string): screenshotRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): screenshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: screenshotRequest): screenshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: screenshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): screenshotRequest;
    static deserializeBinaryFromReader(message: screenshotRequest, reader: jspb.BinaryReader): screenshotRequest;
}

export namespace screenshotRequest {
    export type AsObject = {
        path: string,
    }
}

export class openBrowserRequest extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): openBrowserRequest;

    getBrowser(): string;
    setBrowser(value: string): openBrowserRequest;

    getHeadless(): boolean;
    setHeadless(value: boolean): openBrowserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): openBrowserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: openBrowserRequest): openBrowserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: openBrowserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): openBrowserRequest;
    static deserializeBinaryFromReader(message: openBrowserRequest, reader: jspb.BinaryReader): openBrowserRequest;
}

export namespace openBrowserRequest {
    export type AsObject = {
        url: string,
        browser: string,
        headless: boolean,
    }
}

export class goToRequest extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): goToRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): goToRequest.AsObject;
    static toObject(includeInstance: boolean, msg: goToRequest): goToRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: goToRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): goToRequest;
    static deserializeBinaryFromReader(message: goToRequest, reader: jspb.BinaryReader): goToRequest;
}

export namespace goToRequest {
    export type AsObject = {
        url: string,
    }
}

export class inputTextRequest extends jspb.Message { 
    getInput(): string;
    setInput(value: string): inputTextRequest;

    getSelector(): string;
    setSelector(value: string): inputTextRequest;

    getType(): boolean;
    setType(value: boolean): inputTextRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): inputTextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: inputTextRequest): inputTextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: inputTextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): inputTextRequest;
    static deserializeBinaryFromReader(message: inputTextRequest, reader: jspb.BinaryReader): inputTextRequest;
}

export namespace inputTextRequest {
    export type AsObject = {
        input: string,
        selector: string,
        type: boolean,
    }
}

export class typeTextRequest extends jspb.Message { 
    getSelector(): string;
    setSelector(value: string): typeTextRequest;

    getText(): string;
    setText(value: string): typeTextRequest;

    getDelay(): number;
    setDelay(value: number): typeTextRequest;

    getClear(): boolean;
    setClear(value: boolean): typeTextRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): typeTextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: typeTextRequest): typeTextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: typeTextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): typeTextRequest;
    static deserializeBinaryFromReader(message: typeTextRequest, reader: jspb.BinaryReader): typeTextRequest;
}

export namespace typeTextRequest {
    export type AsObject = {
        selector: string,
        text: string,
        delay: number,
        clear: boolean,
    }
}

export class fillTextRequest extends jspb.Message { 
    getSelector(): string;
    setSelector(value: string): fillTextRequest;

    getText(): string;
    setText(value: string): fillTextRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): fillTextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: fillTextRequest): fillTextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: fillTextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): fillTextRequest;
    static deserializeBinaryFromReader(message: fillTextRequest, reader: jspb.BinaryReader): fillTextRequest;
}

export namespace fillTextRequest {
    export type AsObject = {
        selector: string,
        text: string,
    }
}

export class clearTextRequest extends jspb.Message { 
    getSelector(): string;
    setSelector(value: string): clearTextRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): clearTextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: clearTextRequest): clearTextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: clearTextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): clearTextRequest;
    static deserializeBinaryFromReader(message: clearTextRequest, reader: jspb.BinaryReader): clearTextRequest;
}

export namespace clearTextRequest {
    export type AsObject = {
        selector: string,
    }
}

export class pressRequest extends jspb.Message { 
    getSelector(): string;
    setSelector(value: string): pressRequest;

    clearKeyList(): void;
    getKeyList(): Array<string>;
    setKeyList(value: Array<string>): pressRequest;
    addKey(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): pressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: pressRequest): pressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: pressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): pressRequest;
    static deserializeBinaryFromReader(message: pressRequest, reader: jspb.BinaryReader): pressRequest;
}

export namespace pressRequest {
    export type AsObject = {
        selector: string,
        keyList: Array<string>,
    }
}

export class getDomPropertyRequest extends jspb.Message { 
    getProperty(): string;
    setProperty(value: string): getDomPropertyRequest;

    getSelector(): string;
    setSelector(value: string): getDomPropertyRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): getDomPropertyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: getDomPropertyRequest): getDomPropertyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: getDomPropertyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): getDomPropertyRequest;
    static deserializeBinaryFromReader(message: getDomPropertyRequest, reader: jspb.BinaryReader): getDomPropertyRequest;
}

export namespace getDomPropertyRequest {
    export type AsObject = {
        property: string,
        selector: string,
    }
}

export class selectorRequest extends jspb.Message { 
    getSelector(): string;
    setSelector(value: string): selectorRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): selectorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: selectorRequest): selectorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: selectorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): selectorRequest;
    static deserializeBinaryFromReader(message: selectorRequest, reader: jspb.BinaryReader): selectorRequest;
}

export namespace selectorRequest {
    export type AsObject = {
        selector: string,
    }
}

export class Response extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
    export type AsObject = {
    }


    export class Empty extends jspb.Message { 
        getLog(): string;
        setLog(value: string): Empty;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Empty.AsObject;
        static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Empty;
        static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
    }

    export namespace Empty {
        export type AsObject = {
            log: string,
        }
    }

    export class String extends jspb.Message { 
        getLog(): string;
        setLog(value: string): String;

        getBody(): string;
        setBody(value: string): String;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): String.AsObject;
        static toObject(includeInstance: boolean, msg: String): String.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: String, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): String;
        static deserializeBinaryFromReader(message: String, reader: jspb.BinaryReader): String;
    }

    export namespace String {
        export type AsObject = {
            log: string,
            body: string,
        }
    }

    export class Bool extends jspb.Message { 
        getLog(): string;
        setLog(value: string): Bool;

        getBody(): boolean;
        setBody(value: boolean): Bool;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Bool.AsObject;
        static toObject(includeInstance: boolean, msg: Bool): Bool.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Bool, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Bool;
        static deserializeBinaryFromReader(message: Bool, reader: jspb.BinaryReader): Bool;
    }

    export namespace Bool {
        export type AsObject = {
            log: string,
            body: boolean,
        }
    }

}

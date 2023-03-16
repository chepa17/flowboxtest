import React from 'react';
import {mapImages} from "./useImages";

const responseMock = [{
    alt_description: 'testDescription',
    id: 'testId',
    urls: {
        full: 'testFullUrl',
        raw: 'testRawUrl',
        regular: 'testRegUrl',
        small: 'testSmallUrl',
    },
}]

describe('useImages hook', function () {
    it('mapImages', () => {
        expect(mapImages(responseMock)).toEqual([{
            url: 'testSmallUrl',
            description: 'testDescription',
            id: 'testId',
        }])
    })
})
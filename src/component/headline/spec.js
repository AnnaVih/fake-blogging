import React from 'react';
import {shallow} from 'enzyme';
import checkPropTypes from 'check-prop-types'

import Headline from './index';
import {findByTestAttr} from '../../../Utils'

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>)
    return component;
}

describe('Headline Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'TestHeader',
                desc: 'TestDesc',
                tempArr: [{
                    fName: 'TestName',
                    lName: 'TestLName',
                    email: 'emeilTEst'
                }]
            };
            const propsErr = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name );

            expect(propsErr).toBeUndefined();
        });
    });


    describe('Have props', () => {
        let wrapper;
        beforeEach(()=> {
            const props = {
                header: 'Test Header',
                desc: 'Test desc'
            }
            wrapper = setUp(props);
            console.log(wrapper)
        });

        it('Should render whithout errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1)
        })

        it('Should render a H1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1)
        });

        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1)
        })

    });

    describe('Have no props', () => {
        let wrapper;
        beforeEach(()=> {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0)
        })

    });
})

import { Request } from "express";
import React from 'react';
import UIExample from '../../components';

export function getProps(request: Request) {
    return { name: 'Phoenix' };
}

export default (props: ReturnType<typeof getProps>) => <UIExample text={props.name.toString()}/>;
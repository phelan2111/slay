/** @format */

import React from 'react';
import en from './json/en.json';
import vn from './json/vn.json';
import { useSelector } from 'react-redux';
import { langSelector } from 'stores/reducer/lang';
import { CheckObjectEmpty } from 'utils/helper';

interface ILocalize {
    til: string;
}

interface ILangJson {
    [name: string]: object;
}

const LangJson: ILangJson = {
    en: en,
    vn: vn,
};

const Localize = ({ til }: ILocalize) => {
    const { lang } = useSelector(langSelector);
    const langs: any = LangJson[lang];
    return <span>{CheckObjectEmpty(langs[til], til)}</span>;
};

export default Localize;

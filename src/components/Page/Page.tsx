import React, { FunctionComponent } from 'react';
import './Page.css';

export type PageType = 'primary' | 'secondary' | 'tertiary';

export type PageProps = {
  title?: string;
};

const PageTitle: FunctionComponent<{ title: string }> = ({ title }) => {
  if (!title) {
    return null;
  }
  return (
    <div className="page_title">{title}</div>
  )
};

export const Page: FunctionComponent<PageProps> = ({title = '', children }) => {
  return (
    <div className="page">
      <PageTitle title={title}/>
      <div className="page_content">
        {children}
      </div>
    </div>
  );
}
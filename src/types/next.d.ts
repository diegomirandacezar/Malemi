declare module 'next' {
  export type NextConfig = Record<string, unknown>;

  export interface Metadata {
    title?: string | { default: string; template: string };
    description?: string;
    keywords?: string[];
    authors?: Array<{ name: string; url?: string }>;
    creator?: string;
    publisher?: string;
    formatDetection?: Record<string, boolean>;
    openGraph?: Record<string, unknown>;
    twitter?: Record<string, unknown>;
    robots?: Record<string, unknown>;
  }

  export interface Viewport {
    themeColor?: string;
    width?: string;
    initialScale?: number;
    maximumScale?: number;
    userScalable?: boolean;
  }

  export namespace MetadataRoute {
    export interface Robots {
      rules: {
        userAgent: string | string[];
        allow?: string | string[];
        disallow?: string | string[];
      };
      sitemap?: string | string[];
      host?: string;
    }

    export type Sitemap = Array<{
      url: string;
      lastModified?: string | Date;
      changeFrequency?:
        | 'always'
        | 'hourly'
        | 'daily'
        | 'weekly'
        | 'monthly'
        | 'yearly'
        | 'never';
      priority?: number;
    }>;
  }
}

declare module 'next/types.js' {
  export type AppProps = unknown;
  export type ResolvingMetadata = Promise<unknown>;
  export type ResolvingViewport = Promise<unknown>;
}

declare module 'next/link' {
  import React from 'react';
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    replace?: boolean;
    scroll?: boolean;
    prefetch?: boolean;
  }
  const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
  export default Link;
}

declare module 'next/font/google' {
  export interface FontOptions {
    variable?: string;
    subsets?: string[];
    display?: string;
    weight?: string | string[];
  }
  export function Geist(options: FontOptions): { variable: string };
  export function Geist_Mono(options: FontOptions): { variable: string };
  export function Inter(options: FontOptions): { variable: string };
}

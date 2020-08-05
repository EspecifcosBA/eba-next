import { FunctionComponent } from 'react';

type SectionProps = {
  color?: 'default' | 'muted' | 'primary' | 'secondary',
  size?: 'xsmall' | 'small' | 'large' | 'xlarge' | 'remove-vertical',
  tag?: 'section' | 'div'
  className?: string,
  id?: string,
  img?: boolean,
  [key: string]: any
}

const Section: FunctionComponent<SectionProps> = ({ 
  color = 'default',
  size = 'small',
  className = '',
  tag: Tag = 'section',
  img,
  children,
  ...props
}) => {
  return (
    <Tag className={`section section-${color} section-${size} ${className} ${img ? 'section-cover' : ''}`} {...props}>
      <div className="container">
        { children }
      </div>
      <style jsx>{`
        .section {
          display: flex;
          align-items: center;
        }

        .section .container {
          padding: 5rem;
          width: 100%;
        }

        .section.section-xsmall {
          padding: 0;
        }

        .section.section-xsmall > .container {
          padding: 1rem;
        }
        
        .section.section-small {
          padding: 2.5rem 0;
        }
        
        .section.section-regular {
          padding: 5rem 0;
        }

        .section.section-large {
          padding: 10rem 0;
        }

        .section.section-xlarge {
          height: 80vh;
        }

        .section.section-remove-vertical {
          padding-top: 0rem;
        }
      
        .section.section-primary {
          background-color: var(--primaryColor);
          color: var(--primaryTextColor);
        }

        .section.section-muted {
          background-color: var(--secondaryLightColor);
          color: var(--secondaryTextColor);
        }

        .section.section-default {
          background-color: #fff;
          color: var(--secondaryTextColor);
        }

        .section.section-secondary {
          background-color: var(--primaryDarkColor);
          color: var(--primaryTextColor);
        }

        .section.section-cover {
          background-size: cover;
          background-position: bottom left;
        }
      `}</style>
    </Tag>
  )
}

export default Section;
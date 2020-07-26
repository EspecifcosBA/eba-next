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
  size = 'large',
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
    </Tag>
  )
}

export default Section;
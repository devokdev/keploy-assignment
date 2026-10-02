import type { MDXComponents } from 'mdx/types'
import { FlowDiagram } from '@/components/FlowDiagram'
import { Callout } from '@/components/Callout'
import { CodeBlock } from '@/components/CodeBlock'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    FlowDiagram,
    Callout,
    pre: ({ children, ...props }: any) => {
      // If the pre contains a code child with className, forward to our enhanced CodeBlock
      const codeChild = children?.props
      const className = codeChild?.className || ''
      return (
        <CodeBlock className={className} {...props}>
          {codeChild?.children || children}
        </CodeBlock>
      )
    },
    ...components,
  }
}

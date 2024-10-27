import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { LockIcon } from 'lucide-react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary p-2 rounded-full">
              <LockIcon className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Authentication
          </CardTitle>
        </CardHeader>
        {children}
      </Card>
    </div>
  )
}

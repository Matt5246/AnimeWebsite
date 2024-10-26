import React from 'react'
import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-muted mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Anime Learning is a non-profit, educational entity. We do not intend to claim ownership of any anime content on this site nor do we monetize them. All anime content on this website belongs to the studios who created them.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            As per the Copyright Disclaimer under section 107 of the Copyright Act of 1976, allowance is made for &quot;fair use&quot; for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.
                        </p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <Button variant="outline" className="mb-4">
                                <Mail className="mr-2 h-4 w-4" />
                                Contact Support
                            </Button>
                        </div>
                        <div>
                            <Separator className="my-4" />
                            <p className="text-sm text-muted-foreground">
                                © Copyright Anime Learning {currentYear}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
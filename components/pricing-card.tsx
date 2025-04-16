import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  description: string
  price: string
  priceDetail: string
  features: string[]
  buttonText: string
  highlighted?: boolean
}

export default function PricingCard({
  title,
  description,
  price,
  priceDetail,
  features,
  buttonText,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card className={`transition-all ${highlighted ? "border-blue-300 shadow-lg relative" : ""}`}>
      {highlighted && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-[#2196F3] text-white px-4 py-1 rounded-full text-sm font-medium">おすすめ</span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-6">
          <p className="text-3xl font-bold">{price}</p>
          <p className="text-sm text-gray-500">{priceDetail}</p>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${highlighted ? "bg-[#2196F3] hover:bg-[#1976D2]" : ""}`}>{buttonText}</Button>
      </CardFooter>
    </Card>
  )
}

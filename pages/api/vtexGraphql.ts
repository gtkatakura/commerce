import fetch from '@framework/api/utils/fetch'
import { VTEX_API_URL } from '@framework/const'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(VTEX_API_URL, {
    method: req.method,
    body: JSON.stringify(req.body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  res.status(response.status).json(await response.json())
}

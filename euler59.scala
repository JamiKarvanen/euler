import scala.collection.mutable.ListBuffer
import scala.io.Source

object CipherDecrypter {

  val firstLowerCaseASCII = 97
  val lastLowerCaseASCII = 122

  def xorCipher(key: List[Int], cipherParts: List[Int]): List[Int] = {
    val xorredCipher = new ListBuffer[Int]()
    var keyIndex = 0

    for (cipherIndex <- cipherParts.indices) {
      xorredCipher += cipherParts(cipherIndex) ^ key(keyIndex)
      keyIndex += 1
      if (keyIndex == 3) keyIndex = 0
    }

    xorredCipher.toList
  }

  def hasCommonWord(xorredCipher: List[Int]): Boolean = {
    // we search for the word " the ", as it's the most common word in english texts
    val word = List(32, 116, 104, 101, 32)
    xorredCipher.containsSlice(word)
  }

  def main(args: Array[String]): Unit = {
    val file = Source.fromFile("cipher.txt")
    val line = file.getLines().next()
    file.close()

    val cipherParts:List[Int] = line.split(",").map(_.toInt).toList

    // As the word is short, an iterative solution for generating the key is ok.
    // For longer words it would be simpler to use a recursive algorithm
    for (i <- firstLowerCaseASCII to lastLowerCaseASCII) {
      for (j <- firstLowerCaseASCII to lastLowerCaseASCII) {
        for (k <- firstLowerCaseASCII to lastLowerCaseASCII) {
          val xorredCipher = xorCipher(List(i, j, k), cipherParts)
          if (hasCommonWord(xorredCipher)) {
            println("Message: " + xorredCipher.map(_.asInstanceOf[Char]).mkString(""))
            println("Sum: " + xorredCipher.sum)
            System.exit(0)
          }
        }
      }
    }
    System.exit(1)
  }
}
